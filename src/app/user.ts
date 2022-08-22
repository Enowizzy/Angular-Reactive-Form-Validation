export class User {
    constructor(
        public role: string,
        public first_name: string,
        public last_name: string,
        public phone: string,
        public email: string,
        public password: string,
    ) {}
}
