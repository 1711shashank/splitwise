export function calculatePaybaleAmount(inboxData) {

    console.log(inboxData);

    let netAmount = 0;
    inboxData.messageCard.forEach((curMessageCard) => {
        if (curMessageCard.senderEmail === localStorage.getItem('email'))
            netAmount += parseInt(curMessageCard.amount);
        else {
            if(curMessageCard.splitBetween.includes(localStorage.getItem('email'))){
                netAmount -= parseInt(Math.ceil(curMessageCard.amount/curMessageCard.splitBetween.length));
            }
        }
    });
    console.log('utils', netAmount);
    return netAmount;
}