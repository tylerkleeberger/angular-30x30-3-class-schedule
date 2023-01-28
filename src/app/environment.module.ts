import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemEnvironment } from './item.model';
import { ITEMS_ENVIRONMENT } from './items.token';


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: ItemEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: ITEMS_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
