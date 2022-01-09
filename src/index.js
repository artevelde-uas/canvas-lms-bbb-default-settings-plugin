import { router, dom } from '@artevelde-uas/canvas-lms-app';


export default function ({
    enableRecording = false,
    noTimeLimit = false
}) {
    router.onRoute('courses.conferences', async ({ courseId }) => {
        dom.onElementAdded(`.ui-dialog form[action="/courses/${courseId}/conferences"]`, form => {
            const recordSetting = document.getElementById('web_conference_user_settings_record');
            const longRunningSetting = document.getElementById('web_conference_long_running');

            if (enableRecording) {
            recordSetting.click();
            }

            if (noTimeLimit) {
            longRunningSetting.click();
            }
        });
    });
}
