Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actions = function (_Component) {
    _inherits(Actions, _Component);

    function Actions() {
        _classCallCheck(this, Actions);

        return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
    }

    _createClass(Actions, [{
        key: "render",
        value: function () {
            function render() {
                var _props = this.props,
                    position = _props.position,
                    children = _props.children;


                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    { style: styles.container },
                    _react2["default"].createElement(
                        _reactPrimitives.View,
                        { style: [styles.actions, { alignSelf: position === 'left' ? 'flex-start' : 'flex-end' }] },
                        children
                    )
                );
            }

            return render;
        }()
    }]);

    return Actions;
}(_react.Component);

Actions.propTypes = {
    position: _react.PropTypes.oneOf(['left', 'right']),
    children: _react.PropTypes.node.isRequired
};
Actions.defaultProps = {
    position: 'left'
};
exports["default"] = Actions;


var styles = _reactPrimitives.StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: -16,
        paddingLeft: -16
    },
    actions: {
        flexDirection: 'row'
    }
});