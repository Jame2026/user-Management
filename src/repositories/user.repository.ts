import { db } from "../config/db.js";
import { User } from "../models/user.model.js";

export class UserRepository {

    static async getAll(): Promise<User[]> {
        const [rows] = await db.query("SELECT * FROM users");
        return rows as User[];
    }
}