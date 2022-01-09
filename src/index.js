import { router, dom } from '@artevelde-uas/canvas-lms-app';


export default function ({
    enableRecording = false,
    noTimeLimit = false
}) {
    router.onRoute('courses.conferences', async ({ courseId }) => {
        dom.onElementAdded(`.ui-dialog form[action^="/courses/${courseId}/conferences"]`, form => {
            const conferenceType = document.getElementById('web_conference_conference_type');
            const editMode = form.action.match(/\/\d+$/) !== null;

            // Hide conference type selection since tool is now only for BBB
            conferenceType.closest('.control-group').toggleAttribute('hidden', true);

            // Don't change settings when in edit mode
            if (editMode) return;

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
