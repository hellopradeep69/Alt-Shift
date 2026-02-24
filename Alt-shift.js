// A function to move the tab to given num
async function Movetonum(num) {
    // get info based of currentWindow and active tabs
    const tabs = await browser.tabs.query({ currentWindow: true, active: true })
    // in currentWindow the first tab is denoted as 0 just like in array
    // then if checks if the tabs exist to make sure it works
    if (tabs[0]) {
        // and it moves the tab to the location
        await browser.tabs.move(tabs[0].id, { index: num });
    }
}

browser.commands.onCommand.addListener(async (command) => {
    if (command == "Alt_shift_1") {
        await Movetonum(1);
    }
    else if (command == "Alt_shift_2") {
        await Movetonum(2);
    }
    else if (command == "Alt_shift_3") {
        await Movetonum(3);
    }
    else if (command == "Alt_shift_4") {
        await Movetonum(4);
    }
    else if (command == "Alt_shift_5") {
        await Movetonum(5);
    }
})
