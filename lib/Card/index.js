Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _Ripple = require("../polyfill/Ripple");

var _Ripple2 = _interopRequireDefault(_Ripple);

var _helpers = require("../helpers");

var _Media = require("./Media");

var _Media2 = _interopRequireDefault(_Media);

var _Body = require("./Body");

var _Body2 = _interopRequireDefault(_Body);

var _Actions = require("./Actions");

var _Actions2 = _interopRequireDefault(_Actions);

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    theme = _props.theme,
                    overrides = _props.overrides,
                    elevation = _props.elevation,
                    disabled = _props.disabled,
                    onPress = _props.onPress,
                    children = _props.children,
                    style = _props.style;


                var cardStyle = function () {
                    return [styles.container, {
                        elevation: elevation
                    }, !(0, _helpers.isCompatible)('elevation') && {
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,.12)'
                    }, theme && {
                        backgroundColor: _config.COLOR[theme].color
                    }, overrides && overrides.backgroundColor && {
                        backgroundColor: overrides.backgroundColor
                    }, style];
                }();

                if (onPress == null || disabled) {
                    return _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: cardStyle },
                        children
                    );
                }

                var defaultRippleColor = 'rgba(153,153,153,.4)';
                var rippleColor = function () {
                    if (disabled || !(overrides && overrides.rippleColor)) {
                        return defaultRippleColor;
                    }

                    return (0, _helpers.getColor)(overrides.rippleColor);
                }();

                if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                    return _react2["default"].createElement(
                        _Ripple2["default"],
                        {
                            rippleColor: rippleColor,
                            onPress: onPress
                        },
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: cardStyle },
                            children
                        )
                    );
                }

                return _react2["default"].createElement(
                    _reactNative.TouchableNativeFeedback,
                    {
                        background: _reactNative.TouchableNativeFeedback.Ripple(rippleColor),
                        onPress: onPress
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: cardStyle },
                        children
                    )
                );
            }

            return render;
        }()
    }]);

    return Card;
}(_react.Component);

Card.propTypes = {
    theme: _react.PropTypes.string,
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string,
        rippleColor: _react.PropTypes.string
    }),
    elevation: _react.PropTypes.number,
    disabled: _react.PropTypes.bool,
    onPress: _react.PropTypes.func,
    children: _react.PropTypes.node.isRequired,
    style: _reactPrimitives.View.propTypes.style
};
Card.defaultProps = {
    elevation: 2,
    disabled: false
};
Card.Media = _Media2["default"];
Card.Body = _Body2["default"];
Card.Actions = _Actions2["default"];
exports["default"] = Card;


var styles = {
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 2,
        margin: 8,
        paddingLeft: 16,
        paddingRight: 16
    }
};