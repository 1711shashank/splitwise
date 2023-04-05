export function calculatePaybaleAmount(inboxData) {

    console.log(inboxData);

    let netAmount = 0;
    inboxData.messageCard.forEach((curMessageCard) => {
        if (curMessageCard.senderEmail === localStorage.getItem('email'))
            netAmount += parseInt(curMessageCard.amount);
        else {
            netAmount -= parseInt(curMessageCard.amount);
        }
    });
    console.log('utils', netAmount);
    return netAmount;
}