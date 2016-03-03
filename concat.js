/**
 * Created by Lannister on 2014/6/30.
 */
var ms = [
    {
        materiel: '物料A',
        withdrawal: [
            {
                batchInfo: [
                    {
                        batch: 'PB1',
                        quantity: 221
                    },
                    {
                        batch: 'PB2',
                        quantity: 425
                    }
                ]
            },
            {
                batchInfo: [
                    {
                        batch: 'PB3',
                        quantity: 352
                    }
                ]
            }
        ]
    },
    {
        materiel: '物料B',
        withdrawal: [
            {
                batchInfo: [
                    {
                        batch: 'PB4',
                        quantity: 235
                    }
                ]
            }

        ]
    }
];
//var msa = [];
//ms.forEach(function (item) {
//    item.withdrawal.forEach(function (wi) {
//        wi.batchInfo.forEach(function (bi) {
//            msa.push({
//                materiel: item.materiel,
//                batch: bi.batch,
//                quantity: bi.quantity
//            })
//        })
//    })
//});

var xi = ms.reduce(function (x, mi) {
    var wit = mi.withdrawal.reduce(function (y, wi) {
        return y.concat(wi.batchInfo.map(function (bi) {
            bi.materiel = mi.materiel;
            return bi;
        }))
    }, []);
    return x.concat(wit)
}, []);
console.log(xi);