/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

import * as $ from 'jquery';

import { CommonTasks, WebModule } from 'App/common';

const styleStr = require('./app.style.scss');

const viewStr = require('./main.view.html');

export class AppModule extends WebModule {

  public bootstrap(): void {

    CommonTasks.setTitle = AppModule.getTitle;

    this.addView(viewStr);

    this.addStyle(styleStr);

  }

  protected addView(view: string): void {

    $('view#main')
      .append(view);

  }

  protected addStyle(style: string): void {

    CommonTasks.updateStyleSheet = style;

  }

  public static get getTitle() {

    return 'Test PHP MyApp';

  }

}
