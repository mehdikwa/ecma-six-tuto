function exampleConst() {
    const NAME_KEY = 'name';
    const UNFROZEN_OBJ_CONST = { key: 1, val: 'produit1' };
    const FROZEN_OBJ_CONST = Object.freeze({ key: 2, val: 'produit2' });

    const VALUE_KEY; // SyntaxError

    NAME_KEY = 'key'; // SyntaxError

    UNFROZEN_OBJ_CONST.key = 3;

    FROZEN_OBJ_CONST.val = 'toto'; // TypeError

    console.log('const value', NAME_KEY);
    console.log('unfrozen object', UNFROZEN_OBJ_CONST);
    console.log('frozen object', FROZEN_OBJ_CONST);
}
exampleConst();
