import { ObjectId } from "mongodb";
import { connectGame, connectPlayer } from "../db/config.db.js";

export async function createPlayer() {
    const player = {
        chips: 1000,
        createAt: new Date(),
    };
    const res = await connectPlayer.insertOne(player);
    return { _id: res.insertedId, ...player };
}

export async function checkProgress(playerId) {
    return await connectGame.findOne({
        playerId: playerId,
        status: "in_progress",
    });
}

const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
];

const suits = ["hearts", "diamonds", "clubs", "spades"];

const getRandomCard = () => ({
    rank: ranks[Math.floor(Math.random() * ranks.length)],
    suit: suits[Math.floor(Math.random() * suits.length)],
});

export async function createRound(bet, playerId) {
    const chips = await getPlayerById(playerId);
    if (!chips) {
        throw new Error("player not found");
    }
    const exist = await checkProgress(playerId);
    if (exist) throw new Error("active round exist");
    if (!bet || bet < 0 || bet > chips.chips) {
        throw new Error("invalid chips");
    }
    await connectPlayer.updateOne(
        { _id: new ObjectId(playerId) },
        {
            $inc: { chips: -bet },
        }
    );

    const round = {
        playerId,
        bet,
        playerCards: [getRandomCard(), getRandomCard()],
        dealerCards: [getRandomCard(), getRandomCard()],
        status: "in_progress",
        createdAt: new Date(),
    };
    const res = await connectGame.insertOne(round);
    return {
        roundId: res.insertedId.toString(),
        playerCards: round.playerCards,
        dealerUpCard: round.dealerCards[0],
        chips: chips.chips - bet
    };
}

export async function getPlayerById(id) {
    return connectPlayer.findOne({ _id: new ObjectId(id) });
}

export async function getGameById(id) {
    return connectGame.findOne({ _id: new ObjectId(id) });
}

export async function addCardToPlayer(playerId) {
    const game = await checkProgress(playerId);
    if (!game) throw new Error("invalid progress");
    const card = getRandomCard();
    game.playerCards.push(card);
    const total = sumCard(game.playerCards);
    if (total > 21) {
        game.status = "player_bust";
    }
    await connectGame.updateOne(
        { _id: game._id },
        {
            $set: {
                playerCards: game.playerCards,
                total: total,
                status: game.status,
            },
        }
    );
    return game;
}

export function sumCard(cards) {
    let sum = 0;
    let acesCount = 0;
    for (const card of cards) {
        if (card.rank === "K" || card.rank === "Q" || card.rank === "J") {
            sum += 10;
        } else if (card.rank === "A") {
            acesCount += 1;
            sum += 11;
        } else {
            sum += Number(card.rank);
        }
    }
    while (sum > 21 && acesCount > 0) {
        sum -= 10;
        acesCount -= 1;
    }
    return sum;
}
export async function updateChipsPlayer(playerId, sum) {
    await connectPlayer.updateOne(
        { _id: new ObjectId(playerId) },
        { $inc: { chips: sum } }
    );
}

export async function playerStand(playerId) {
    const game = await checkProgress(playerId);
    if (!game) throw new Error("not found");
    let total = sumCard(game.dealerCards);
    while (total < 17) {
        const card = getRandomCard();
        game.dealerCards.push(card);
        total = sumCard(game.dealerCards);
    }
    const totalPlayer = sumCard(game.playerCards);
    if (total > 21) {
        game.status = "dealer_bust";
        await updateChipsPlayer(playerId, game.bet * 2);
    } else if (totalPlayer > total) {
        game.status = "player_win";
        await updateChipsPlayer(playerId, game.bet * 2);
    } else if (totalPlayer < total) {
        game.status = "dealer_win";
    } else {
        game.status = "push";
        await updateChipsPlayer(playerId, game.bet);
    }
    await connectGame.updateOne(
        { _id: game._id },
        { $set: { dealerCards: game.dealerCards, status: game.status } }
    );
    return game;
}
