export default abstract class AuthService {
    static async signin(username: string, password: string) {
        // TODO: validate user credentials
        return {
            status: "success",
            accessToken: "accessToken",
        };
    }
}
