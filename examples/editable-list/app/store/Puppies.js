Ext.define('EditableList.store.Puppies', {
    extend: 'Ext.data.Store',
    requires: ['EditableList.model.Puppy'],
    config: {
        model: 'EditableList.model.Puppy',
        data: [
            { name: 'Fairfax', cuteness: 100 },
            { name: 'Obi',     cuteness: 90  },
            { name: 'Ocho',    cuteness: 80  },
            { name: 'Caesar',  cuteness: 80  },
            { name: 'Paco',    cuteness: 60  },
            { name: 'Mabel',   cuteness: 70  },
            { name: 'Babe',    cuteness: 80  },
            { name: 'Uzi',     cuteness: 50  },
            { name: 'Felix',   cuteness: 60  },
            { name: 'Mac',     cuteness: 70  },
            { name: 'Caige',   cuteness: 100 },
            { name: 'Paige',   cuteness: 100 }
        ]
    }
});
