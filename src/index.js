import { router, dom } from '@artevelde-uas/canvas-lms-app';

import t from './i18n';


export default function ({
    duration,
    enableRecording = false,
    noTimeLimit = false
}) {
    router.onRoute('courses.conferences', async ({ courseId }) => {
        dom.onElementAdded(`.ui-dialog form[action^="/courses/${courseId}/conferences"]`, form => {
            const conferenceType = document.getElementById('web_conference_conference_type');
            const editMode = form.action.match(/\/\d+$/) !== null;

            // Hide conference type selection since tool is now only for BBB
            conferenceType.closest('.control-group').toggleAttribute('hidden', true);

            // Remove unnecessary padding
            form.style.setProperty('padding-bottom', 0, 'important');

            // Don't change settings when in edit mode
            if (editMode) return;

            if (typeof duration === 'number') {
                if (duration < 0) {
                    throw new RangeError('Duration must be 0 or greater');
                }

                const durationSetting = document.getElementById('web_conference_duration');

                durationSetting.value = duration;
                durationSetting.dataset.restoreValue = duration;
            }

            if (enableRecording) {
                const recordSetting = document.getElementById('web_conference_user_settings_record');

                recordSetting.click();
            }

            if (noTimeLimit) {
                const longRunningSetting = document.getElementById('web_conference_long_running');

                longRunningSetting.click();
            }
        });
    });

    return {
        ...require('../package.json'),
        title: t('package.title'),
        description: t('package.description')
    };
}
