Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _reactPrimitives = require("react-primitives");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    primaryText = _props.primaryText,
                    secondaryText = _props.secondaryText,
                    leftIcon = _props.leftIcon,
                    leftAvatar = _props.leftAvatar,
                    rightAvatar = _props.rightAvatar,
                    rightIcon = _props.rightIcon,
                    lines = _props.lines,
                    onPress = _props.onPress,
                    primaryColor = _props.primaryColor,
                    onLeftIconClicked = _props.onLeftIconClicked,
                    onRightIconClicked = _props.onRightIconClicked,
                    secondaryTextMoreLine = _props.secondaryTextMoreLine,
                    captionText = _props.captionText;


                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: [styles.listContainer, { height: lines > 2 ? (lines - 1) * 16 + 56 : secondaryText ? 72 : leftAvatar || rightAvatar ? 56 : 48 }] },
                    leftIcon && _react2["default"].createElement(
                        _reactNative.TouchableWithoutFeedback,
                        { onPress: onLeftIconClicked },
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: [styles.leftIcon, lines > 2 && { paddingTop: 16, alignSelf: 'flex-start' }] },
                            leftIcon
                        )
                    ),
                    leftAvatar && _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: [styles.leftAvatar, lines > 2 && { paddingTop: 16, alignSelf: 'flex-start' }] },
                        leftAvatar
                    ),
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: { flex: 1, justifyContent: 'center' } },
                        _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: styles.firstLine },
                            _react2["default"].createElement(
                                _reactPrimitives.View,
                                { style: styles.primaryTextContainer },
                                _react2["default"].createElement(
                                    _reactPrimitives.Text,
                                    { numberOfLines: 1, style: [styles.primaryText, { color: primaryColor }] },
                                    primaryText
                                )
                            ),
                            lines > 2 && !!rightIcon || _react2["default"].createElement(
                                _reactPrimitives.View,
                                { style: styles.captionTextContainer },
                                _react2["default"].createElement(
                                    _reactPrimitives.Text,
                                    { style: styles.captionText },
                                    captionText
                                )
                            )
                        ),
                        secondaryText && _react2["default"].createElement(
                            _reactPrimitives.View,
                            null,
                            _react2["default"].createElement(
                                _reactPrimitives.Text,
                                { style: [{ height: 18 }, lines > 2 && { height: 22 * (lines - 1) - 4 }, styles.secondaryText] },
                                secondaryText
                            )
                        ),
                        secondaryTextMoreLine && _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: [{ height: 18 }, lines > 2 && { height: 22 * (lines - 1) - 4 }] },
                            secondaryTextMoreLine.map(function (line) {
                                return _react2["default"].createElement(
                                    _reactPrimitives.Text,
                                    { style: [styles.secondaryText, { height: 22 }, line.style] },
                                    line.text
                                );
                            })
                        )
                    ),
                    rightAvatar && _react2["default"].createElement(
                        _reactPrimitives.View,
                        {
                            style: [styles.rightAvatar, lines > 2 && {
                                paddingTop: 16,
                                alignSelf: 'flex-start'
                            }]
                        },
                        rightAvatar
                    ),
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: { flexDirection: 'column' } },
                        lines > 2 && !!rightIcon && !!captionText && _react2["default"].createElement(
                            _reactPrimitives.View,
                            { style: styles.captionTextContainer2 },
                            _react2["default"].createElement(
                                _reactPrimitives.Text,
                                null,
                                captionText
                            )
                        ),
                        rightIcon && _react2["default"].createElement(
                            Ripple,
                            { onPress: onRightIconClicked },
                            _react2["default"].createElement(
                                _reactPrimitives.View,
                                {
                                    style: [styles.rightIcon, { flex: 1 }, lines > 2 && {
                                        paddingTop: 16,
                                        alignSelf: 'flex-end',
                                        justifyContent: 'flex-end'
                                    }],
                                    onPress: onRightIconClicked
                                },
                                rightIcon
                            )
                        )
                    )
                );
            }

            return render;
        }()
    }]);

    return List;
}(_react.Component);

List.propTypes = {
    primaryText: _react.PropTypes.string.isRequired,
    secondaryText: _react.PropTypes.string,
    captionText: _react.PropTypes.string,
    secondaryTextMoreLine: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.string.isRequired,
        style: _react.PropTypes.object
    })),
    leftIcon: _react.PropTypes.element,
    rightIcon: _react.PropTypes.element,
    leftAvatar: _react.PropTypes.element,
    rightAvatar: _react.PropTypes.element,
    lines: _react.PropTypes.number,
    primaryColor: _react.PropTypes.string,
    onPress: _react.PropTypes.func,
    onLeftIconClick: _react.PropTypes.func,
    onRightIconClick: _react.PropTypes.func
};
List.defaultProps = {
    lines: 1,
    primaryColor: 'rgba(0,0,0,.87)'
};
exports["default"] = List;


var styles = _reactPrimitives.StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        height: 48,
        alignItems: 'center'
    },
    leftIcon: {
        width: 56,
        position: 'relative',
        top: -6
    },
    rightIcon: {
        paddingLeft: 16,
        position: 'relative',
        top: -3,
        left: -8
    },
    leftAvatar: {
        width: 56
    },
    rightAvatar: {
        width: 56
    },
    primaryText: Object.assign({}, _config.TYPO.paperFontSubhead, { lineHeight: 24 }),
    secondaryText: Object.assign({}, _config.TYPO.paperFontBody1, {
        lineHeight: 22,
        fontSize: 14,
        color: 'rgba(0,0,0,.54)'
    }),
    firstLine: {
        flexDirection: 'row'
    },
    primaryTextContainer: {
        flex: 1,
        paddingRight: 16
    },
    captionTextContainer: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start'
    },
    captionText: Object.assign({}, _config.TYPO.paperFontCaption),
    captionTextContainer2: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    }
});