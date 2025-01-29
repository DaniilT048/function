function generateKey(keyLength, symbols) {
        const arr = symbols.split('');
        const result = [];
        for (let i = 0; i < keyLength; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            result.push(arr[randomIndex]);
        }
        result.sort(() => Math.random() - 0.5);
        return result.join('');
    }
export {generateKey};