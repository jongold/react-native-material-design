Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Divider = function (_Component) {
    _inherits(Divider, _Component);

    function Divider() {
        _classCallCheck(this, Divider);

        return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
    }

    _createClass(Divider, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    inset = _props.inset,
                    theme = _props.theme,
                    style = _props.style;


                return _react2["default"].createElement(_reactPrimitives.View, {
                    style: [styles.divider, inset && { marginLeft: 72 }, {
                        backgroundColor: theme === 'light' ? 'rgba(0,0,0,.12)' : 'rgba(255,255,255,.12)'
                    }, style]
                });
            }

            return render;
        }()
    }]);

    return Divider;
}(_react.Component);

Divider.propTypes = {
    inset: _react.PropTypes.bool,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    style: _reactPrimitives.View.propTypes.style
};
Divider.defaultProps = {
    inset: false,
    theme: 'light'
};
exports["default"] = Divider;


var styles = {
    divider: {
        height: 1
    }
};