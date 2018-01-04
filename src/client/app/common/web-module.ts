/**
 * Copyright 2017 - Author gauravm.git@gmail.com
 */

export abstract class WebModule {

  public abstract bootstrap(): void;

  protected abstract addView(view: string): void;

  protected abstract addStyle(style: string): void;

}
