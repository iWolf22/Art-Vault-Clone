import "server-only"
import md5 from "md5";

export default function hashing(password: string, randomHash: string, saltRounds: number) {
    for (var i = 0; i < saltRounds; i++) {
        password = md5(password + randomHash)
    }
    return password;
}