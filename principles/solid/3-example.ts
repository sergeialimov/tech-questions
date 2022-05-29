// Subtypes must be substitutable (replacable) for their base types.

/**
 * The LSP allows us to replace a dependency with another implementation as long as both
 * implementations are based in the same base type. For example, we decide to stop using cookies
 * as storage and use the HTML5 local storage API instead without having to worry about the
 * FavouritesController code being affected by this change:
 */


interface IPersistanceService {
  save(entity: any): number;
}


class FavouriteController {
  private _persistanceService: IPersistanceService;
  constructor(persistanceService: IPersistanceService) {
    this._persistanceService = persistanceService;
  }
  public saveAsFavourite(articleId: number) {
    return this._persistanceService.save(articleId);
  }
}


class CookiePersistanceService implements IPersistanceService {
  save(entity: any): number {
    const id = Math.floor((Math.random() * 100) + 1);
    // Cookie persistance logic
    return id;
  }
}

const favController = new FavouriteController(new CookiePersistanceService());


class LocalStoragePersistanceService {
  save(entity: any): number {
    const id = Math.floor((Math.random() * 100) + 1);
    // Local storage persistance logic
    return id;
  }
}

const favController2 = new FavouriteController(new LocalStoragePersistanceService());
