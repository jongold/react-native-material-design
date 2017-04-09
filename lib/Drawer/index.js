Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _config = require("../config");

var _helpers = require("../helpers");

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Section = require("./Section");

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_Component) {
    _inherits(Drawer, _Component);

    function Drawer() {
        _classCallCheck(this, Drawer);

        return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    _createClass(Drawer, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    theme = _props.theme,
                    overrides = _props.overrides,
                    children = _props.children;


                var backgroundColorMap = {
                    light: '#ffffff',
                    dark: '#333333'
                };

                var backgroundColor = function () {
                    if (overrides && overrides.backgroundColor) {
                        return (0, _helpers.getColor)(overrides.backgroundColor);
                    }
                    return backgroundColorMap[theme];
                }();

                return _react2["default"].createElement(
                    _reactNative.ScrollView,
                    { style: [styles.container, { backgroundColor: backgroundColor }] },
                    _react2["default"].Children.map(children, function (child) {
                        return _react2["default"].cloneElement(child, {
                            theme: theme
                        });
                    })
                );
            }

            return render;
        }()
    }]);

    return Drawer;
}(_react.Component);

Drawer.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    overrides: _react.PropTypes.shape({
        backgroundColor: _react.PropTypes.string
    }),
    children: _react.PropTypes.node.isRequired
};
Drawer.defaultProps = {
    theme: 'light',
    primary: 'paperGrey'
};
Drawer.Header = _Header2["default"];
Drawer.Section = _Section2["default"];
exports["default"] = Drawer;


var styles = {
    container: {
        flex: 1
    }
};