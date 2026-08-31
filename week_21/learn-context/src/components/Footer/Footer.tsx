import React from "react";
import { userStore } from "../../store/userStore";

export default function Footer() {
    const user = userStore((s) => s.user);
    return <div>Footer</div>;
}
