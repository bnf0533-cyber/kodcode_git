import random


def get_valid_input(guessed_letters):
    while True:
        user_guess = input("guess a letter: ").lower()
        
        if len(user_guess) != 1:
            print("please enter a single letter.")
        elif not user_guess.isalpha():
            print("please enter a letter.")
        elif user_guess in guessed_letters:
            print("you already guessed this letter.")
        else:
            return user_guess


def update_game_state(letter, secret_word, guessed_letters):
    guessed_letters.append(letter)
    return letter in secret_word

def display_board(secret_word, guessed_letters, attempts):
    display = ""
    for char in secret_word:
        if char in guessed_letters:
            display += char + " "
        else:
            display += " _ "
    
    print("\n" + "="*30)
    print(f"Word to guess: {display}")
    print(f"Attempts left: {attempts}")
    print(f"Letters you already tried: {', '.join(guessed_letters)}")
    print("="*30 + "\n")
    
    return display
    
def check_game_over(secret_word, guessed_letters, attempts):

    if attempts <= 0:
        return "lose"
    
    for char in secret_word:
        if char not in guessed_letters:
            return "continue"
        
    return "win"
        
def main():
    words_list = ["banana", "computer", "python", "israel", "keyboard", "soldier", "pizza"]
    secret_word = random.choice(words_list)
    guessed_letters = []
    attempts = 6
    print("""
    =========================================
       🎮 WELCOME TO GUESS THE WORD 🎮
    
     Can you guess the secret word before
         your attempts run out? Good luck!
    =========================================
    """)
    while True:
        display_board(secret_word, guessed_letters, attempts)

        letter = get_valid_input(guessed_letters)

        if not update_game_state(letter, secret_word, guessed_letters):
            attempts -= 1

        result = check_game_over(secret_word, guessed_letters, attempts)
        
        if result == "win":
            display_board(secret_word, guessed_letters, attempts)
            print("you won!!")
            break
        elif result == "lose":
            print("try again")
            print(f"the secret word is: {secret_word}")
            break

if __name__ == "__main__":
    main()