'use strict';

import fixtures           from '../../utils/fixtures';
import copyObject         from '../../utils/copyObject';
import TextStore   from '../../app/js/stores/store-text';
import TextActions from '../../app/js/actions/textActions';
import DataAPI            from '../../app/js/utils/';

describe('Store: Text', function() {

    // const TextData = copyObject(fixtures.user);

    beforeEach(function() {
        TextStore.data = null;
    });

});
