export async function getUsers() {
    try {
        const response = await fetch('https://cornie-assessment.herokuapp.com/users/8wdkcw05bdEa47R')
        return response.json()
    } catch (err) {
        console.log(err);
    }
} 