Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _IconToggle = require("./IconToggle");

var _IconToggle2 = _interopRequireDefault(_IconToggle);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typos = _reactPrimitives.StyleSheet.create(_config.TYPO);

var RadioButton = function (_Component) {
    _inherits(RadioButton, _Component);

    function RadioButton() {
        _classCallCheck(this, RadioButton);

        return _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    _createClass(RadioButton, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    theme = _props.theme,
                    primary = _props.primary,
                    value = _props.value,
                    checked = _props.checked,
                    disabled = _props.disabled,
                    onSelect = _props.onSelect;

                var primaryColor = _config.COLOR[String(primary) + "500"].color;

                var status = function () {
                    if (disabled) {
                        return 'disabled';
                    } else if (checked) {
                        return 'checked';
                    } else {
                        return 'default';
                    }
                }();

                var colorMap = {
                    light: {
                        disabled: '#000',
                        checked: primaryColor,
                        "default": '#000'
                    },
                    dark: {
                        disabled: '#fff',
                        checked: primaryColor,
                        "default": '#fff'
                    }
                };

                var opacityMap = {
                    light: {
                        checked: 1,
                        "default": 0.54,
                        disabled: 0.26
                    },
                    dark: {
                        checked: 1,
                        "default": 0.7,
                        disabled: 0.3
                    }
                };

                var underlayMap = {
                    light: 'rgba(0,0,0,.12)',
                    dark: 'rgba(255,255,255,.12)'
                };

                var labelColorMap = {
                    light: '#000',
                    dark: '#fff'
                };

                var CURR_COLOR = colorMap[theme][status];
                var OPACITY = opacityMap[theme][status];
                var LABEL_COLOR = labelColorMap[theme];
                var UNDERLAY_COLOR = underlayMap[theme];

                return _react2["default"].createElement(
                    _reactNative.TouchableHighlight,
                    {
                        onPress: function () {
                            function onPress() {
                                disabled && !checked ? null : onSelect(value);
                            }

                            return onPress;
                        }(),
                        underlayColor: disabled ? 'rgba(0,0,0,0)' : UNDERLAY_COLOR,
                        activeOpacity: 1
                    },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: styles.container },
                        _react2["default"].createElement(
                            _IconToggle2["default"],
                            {
                                disabled: disabled,
                                color: CURR_COLOR,
                                onPress: function () {
                                    function onPress() {
                                        disabled && !checked ? null : onSelect(value);
                                    }

                                    return onPress;
                                }()
                            },
                            _react2["default"].createElement(_Icon2["default"], { name: checked ? 'radio-button-checked' : 'radio-button-unchecked',
                                size: 24,
                                color: CURR_COLOR,
                                style: {
                                    opacity: OPACITY,
                                    margin: 16
                                }
                            })
                        ),
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: styles.labelContainer },
                            _react2["default"].createElement(
                                _reactPrimitives.Text,
                                {
                                    style: [typos.paperFontBody1, styles.label, _config.COLOR[String(theme) + "PrimaryOpacity"], disabled && _config.COLOR[String(theme) + "DisabledOpacity"], {
                                        color: LABEL_COLOR
                                    }]
                                },
                                this.props.label
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);

    return RadioButton;
}(_react.Component);

RadioButton.propTypes = {
    label: _react.PropTypes.string,
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    checked: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func
};
RadioButton.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY,
    disabled: false
};
exports["default"] = RadioButton;


var styles = _reactPrimitives.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    labelContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    label: {
        marginLeft: 16,
        opacity: _config.COLOR.darkPrimaryOpacity.opacity
    }
});