export class NameDuplicationError extends Error {
  public name = "\u001b[31;1mNAME DUPLICATION\u001b[0m";
  public message: string;

  public constructor(name: string) {
    super();
    this.message = name + " is already used as item name";
    return;
  }
}

export class NameNotFoundError extends Error {
  public name = "\u001b[31;1mNAME NOT FOUND\u001b[0m";
  public message: string;

  public constructor(name: string) {
    super();
    this.message = `entry name "${name}" could not be found`;
    return;
  }
}

export class IDNotFoundError extends Error {
  public name = "\u001b[31;1mNAME DUPLICATION\u001b[0m";
  public message: string;

  public constructor(id: number) {
    super();
    this.message = `entry id "${id}" could not be found`;
    return;
  }
}

export class InvalidKeyError extends Error {
  public name = "\u001b[31;1mINVALID KEY\u001b[0m";
  public message: string;

  public constructor(key: string, db: string) {
    super();
    this.message = `"${key}" does not exist on ${db}! failed changing value`;
  }
}

export class KeyUndefinedError extends Error {
  public name = "\u001b[31;1mUNDEFINED KEY\u001b[0m";
  public message: string;

  public constructor() {
    super();
    this.message = `data is an object, but key was undefined`;
  }
}

export class ValueIsNotNumber extends Error {
  public name = "\u001b[31;1mVALUE TYPE IS NOT A NUMBER\u001b[0m";
  public message: string;

  public constructor(key: unknown) {
    super();
    this.message = `${key} is not a number but ${typeof key}`;
  }
}
