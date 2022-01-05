import { router, dom } from '@artevelde-uas/canvas-lms-app';


export default function () {
    router.onRoute('courses.conferences', params => {
        dom.onElementAdded('#web_conference_user_settings_record', recordSetting => {
            const longRunningSetting = document.getElementById('web_conference_long_running');
            const form = recordSetting.closest('form');
            const editMode = form.action.match(/\/courses\/\d+\/conferences\/\d+$/) !== null;

            if (editMode) return;

            recordSetting.click();
            longRunningSetting.click();
        });
    });
}
