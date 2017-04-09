Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _Ripple = require("./polyfill/Ripple");

var _Ripple2 = _interopRequireDefault(_Ripple);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = function (_Component) {
    _inherits(Ripple, _Component);

    function Ripple() {
        _classCallCheck(this, Ripple);

        return _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
    }

    _createClass(Ripple, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    color = _props.color,
                    onPress = _props.onPress,
                    onLongPress = _props.onLongPress,
                    children = _props.children,
                    other = _objectWithoutProperties(_props, ["color", "onPress", "onLongPress", "children"]);

                if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                    return _react2["default"].createElement(
                        _Ripple2["default"],
                        _extends({
                            rippleColor: color,
                            onPress: onPress,
                            onLongPress: onLongPress
                        }, other),
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: { marginHorizontal: .2 } },
                            children
                        )
                    );
                }

                return _react2["default"].createElement(
                    _reactNative.TouchableNativeFeedback,
                    {
                        background: _reactNative.TouchableNativeFeedback.Ripple(color),
                        onPress: onPress,
                        onLongPress: onLongPress
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        other,
                        children
                    )
                );
            }

            return render;
        }()
    }]);

    return Ripple;
}(_react.Component);

Ripple.propTypes = {
    color: _react.PropTypes.string,
    onPress: _react.PropTypes.func,
    onLongPress: _react.PropTypes.func,
    children: _react.PropTypes.node.isRequired
};
Ripple.defaultProps = {
    color: 'rgba(0,0,0,.2)'
};
exports["default"] = Ripple;