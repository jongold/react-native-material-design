Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _Icon = require("../Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Ripple = require("../polyfill/Ripple");

var _Ripple2 = _interopRequireDefault(_Ripple);

var _config = require("../config");

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Component) {
    _inherits(Section, _Component);

    function Section() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Section);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Section.__proto__ || Object.getPrototypeOf(Section)).call.apply(_ref, [this].concat(args))), _this), _this.renderRow = function (item, index, color) {
            return _react2["default"].createElement(
                _reactPrimitives.View,
                {
                    key: index,
                    style: styles.item
                },
                item.icon && _react2["default"].createElement(_Icon2["default"], {
                    name: item.icon,
                    color: color,
                    size: 22,
                    style: styles.icon
                }),
                _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: styles.value },
                    _react2["default"].createElement(
                        _reactPrimitives.Text,
                        { style: [_config.TYPO.paperFontBody2, { color: color }] },
                        item.value
                    )
                ),
                item.label && _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: styles.label },
                    _react2["default"].createElement(
                        _reactPrimitives.Text,
                        { style: [_config.TYPO.paperFontBody2, { color: color }] },
                        item.label
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Section, [{
        key: "render",
        value: function () {
            function render() {
                var _this2 = this;

                var _props = this.props,
                    theme = _props.theme,
                    title = _props.title,
                    items = _props.items;


                var textStyleMap = {
                    light: {
                        'default': 'rgba(0,0,0,.87)',
                        disabled: 'rgba(0,0,0,.38)'
                    },
                    dark: {
                        'default': '#ffffff',
                        disabled: 'rgba(255,255,255,.30)'
                    }
                };

                var subheaderStyleMap = {
                    light: 'rgba(0,0,0,.54)',
                    dark: 'rgba(255,255,255,.70)'
                };

                var activeStyleMap = {
                    light: '#f5f5f5',
                    dark: '#212121'
                };

                var TEXT_COLOR = textStyleMap[theme]['default'];
                var SUB_TEXT_COLOR = subheaderStyleMap[theme];
                var ACTIVE_COLOR = activeStyleMap[theme];

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: styles.section },
                    title && _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: [styles.subheader, styles.item] },
                        _react2["default"].createElement(
                            _reactPrimitives.Text,
                            { style: [_config.TYPO.paperFontBody2, { color: SUB_TEXT_COLOR }] },
                            title
                        )
                    ),
                    items && items.map(function (item, i) {
                        if (item.disabled) {
                            return _this2.renderRow(item, i, textStyleMap[theme]['disabled']);
                        }

                        if (!(0, _helpers.isCompatible)('TouchableNativeFeedback')) {
                            return _react2["default"].createElement(
                                _Ripple2["default"],
                                {
                                    key: i,
                                    rippleColor: "rgba(153,153,153,.4)",
                                    onPress: item.onPress,
                                    onLongPress: item.onLongPress,
                                    style: {
                                        flex: 1,
                                        flexDirection: 'row',
                                        backgroundColor: item.active ? ACTIVE_COLOR : null
                                    }
                                },
                                _this2.renderRow(item, i, TEXT_COLOR)
                            );
                        }

                        return _react2["default"].createElement(
                            _reactNative.TouchableNativeFeedback,
                            {
                                key: i,
                                background: _reactNative.TouchableNativeFeedback.Ripple('rgba(153,153,153,.4)'),
                                onPress: item.onPress,
                                onLongPress: item.onLongPress
                            },
                            _react2["default"].createElement(
                                _reactPrimitives.View,
                                { style: item.active ? { backgroundColor: ACTIVE_COLOR } : {} },
                                _this2.renderRow(item, i, TEXT_COLOR)
                            )
                        );
                    })
                );
            }

            return render;
        }()
    }]);

    return Section;
}(_react.Component);

Section.propTypes = {
    title: _react.PropTypes.string,
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        icon: _react.PropTypes.string,
        value: _react.PropTypes.string.isRequired,
        label: _react.PropTypes.string,
        onPress: _react.PropTypes.func,
        onLongPress: _react.PropTypes.func,
        active: _react.PropTypes.bool,
        disabled: _react.PropTypes.bool
    }))
};
exports["default"] = Section;


var styles = {
    section: {
        marginTop: 8,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 16,
        flexWrap: 'wrap'
    },
    subheader: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    icon: {
        position: 'absolute',
        top: 13
    },
    value: {
        flex: 1,
        paddingLeft: 56,
        top: 2
    },
    label: {
        paddingRight: 16,
        top: 2
    }
};