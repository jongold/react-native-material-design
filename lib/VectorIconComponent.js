Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = _interopRequireDefault(_MaterialIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _iconComponent = _MaterialIcons2['default'];

exports['default'] = {
  set: function () {
    function set(component) {
      _iconComponent = component;
    }

    return set;
  }(),
  get: function () {
    function get() {
      return _iconComponent;
    }

    return get;
  }()
};