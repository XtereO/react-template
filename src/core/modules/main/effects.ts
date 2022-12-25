import { StorageKey } from '@core/models';
import { setStorageValue } from '@core/vk-bridge';
import { createEffect } from 'effector';
import { checkOnboardingEvent, setFetching } from './events';

export const checkTrainingEffect = createEffect(async () => {
  setStorageValue({ key: StorageKey.IsCheckOnboarding, value: true });
});
checkTrainingEffect.pending.watch(isPending => {
  setFetching(isPending);
});
checkTrainingEffect.doneData.watch(() => {
  checkOnboardingEvent();
});
