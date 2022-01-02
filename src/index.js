import { router, dom } from '@artevelde-uas/canvas-lms-app';


export default function () {
    router.onRoute('courses.conferences', params => {
        dom.onElementAdded('#web_conference_user_settings_record', recordSetting => {
            let longRunningSetting = document.getElementById('web_conference_long_running');
            let form = recordSetting.closest('form');
            let editMode = form.action.match(/\/courses\/\d+\/conferences\/\d+$/) !== null;

            if (editMode) return;

            recordSetting.click();
            longRunningSetting.click();
        });
    });
}
