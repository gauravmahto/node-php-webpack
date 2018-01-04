/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

export class CommonTasks {

  public static set setTitle(title: string) {

    document.title = title;

  }

  public static set updateStyleSheet(style: string) {

    const sheet: CSSStyleSheet = window.document.styleSheets[0] as CSSStyleSheet;
    sheet.insertRule(style, sheet.cssRules.length);

  }

}
