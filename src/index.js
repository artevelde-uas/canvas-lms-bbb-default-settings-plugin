
export default function ({ router, dom }) {
    router.addListener('courses.conferences', params => {

        dom.onElementAdded('#web_conference_user_settings_record', recordSetting => {
            let longRunningSetting = document.getElementById('web_conference_long_running');

            recordSetting.checked = true;
            longRunningSetting.checked = true;
        });

    });
}
