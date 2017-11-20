(function() {

    function onLoad() {
        // checkbox id is something like :31guests-modify
        // the number does actually change
        // it's not even a valid selector ¯\_(ツ)_/¯
        // var modifyEventCheckbox = document.querySelector('input[id$=guests-modify]');
        var clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });

        var modifyEventCheckbox, modifyEventCheckboxChecked;

        // First let's try to get the Checkbox and see if it's a new version of GCal type
        if (modifyEventCheckbox = document.querySelector('div[aria-label$="Let guests modify the event"]')) {
            // This JSON.parse is necessary because the getAttribute will return the string "true" or "false"
            modifyEventCheckboxChecked = JSON.parse(modifyEventCheckbox.getAttribute('aria-checked'));
        // Otherwise let's try the old version
        } else if (modifyEventCheckbox = document.querySelector('input[id$=guests-modify]')) {
            modifyEventCheckboxChecked = modifyEventCheckbox.checked;
        }

        // If we have the checkbox and it's not checked
        if (modifyEventCheckbox && !modifyEventCheckboxChecked) {
            // activate the checkbox by mimicing click
            // needed so the checkbox stays checked, after switching tabs to e.g. to "find a time"
            modifyEventCheckbox.dispatchEvent(clickEvent)
        }
    }

    window.addEventListener('hashchange', function() {
        // delay execution, because DOM might not be ready immediately
        // after event was fired
        window.setTimeout(onLoad, 250);
    });
    onLoad();
})();
