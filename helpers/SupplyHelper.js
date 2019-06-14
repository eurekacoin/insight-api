var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        const sup = 149050000;
        return (new BigNumber(sup.toString())).plus((height - 5000) * 0.05);
    }

};