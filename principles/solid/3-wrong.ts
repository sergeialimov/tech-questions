/**
 * A very common violation of this principle is the partial implementation of interfaces or
 * base class functionality, leaving unimplemented methods or properties to throw an exception
 * (e.g. NotImplementedException).
 */

/**
 *  If a given interface has more features than you require, follow the
 * Interface Segregation Principle and create a new interface that includes only the functionality
 * your client code requires, and which you can implement fully.
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
  store(entity: any): number {
    const id = Math.floor((Math.random() * 100) + 1);
    // Cookie persistance logic
    return id;
  }
}

const favController = new FavouriteController(new CookiePersistanceService());
// Property 'save' is missing in type 'CookiePersistanceService' but required in type 'IPersistanceService'.
