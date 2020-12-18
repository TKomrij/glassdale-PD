let criminals = []

export const getCriminals = () => {

    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                criminals = parsedCriminals

            }
        )
}


export const useCriminals = () => {
    return criminals.slice()
}