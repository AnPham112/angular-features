import { CanDeactivateFn } from '@angular/router';
import { ICanDeactivate } from '../app/components/user-profile/user-profile.component';

export const canDeactivateUserProfile: CanDeactivateFn<ICanDeactivate> = (
  component
) => {
  return component.canDeactivate()
    ? true
    : confirm('Changes will be lost. Are you sure?');
};
