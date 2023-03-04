export default function (error) {
    switch (error) {
        case 'auth/invalid-email':
            return 'Invalid email'
        default:
            return error;
    }
}