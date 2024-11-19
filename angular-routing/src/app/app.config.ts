import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './services/TemplateTitleStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
};
