Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("react-native");

var _reactPrimitives = require("react-primitives");

var _RadioButton = require("./RadioButton");

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButtonGroup = function (_Component) {
    _inherits(RadioButtonGroup, _Component);

    function RadioButtonGroup(props) {
        _classCallCheck(this, RadioButtonGroup);

        var _this = _possibleConstructorReturn(this, (RadioButtonGroup.__proto__ || Object.getPrototypeOf(RadioButtonGroup)).call(this, props));

        _this.componentDidMount = function () {
            var selected = _this.state.selected;


            if (selected) {
                _this.value = selected;
            }
        };

        _this.onSelect = function (value) {
            var onSelect = _this.props.onSelect;


            _this.setState({
                selected: value
            });

            onSelect && onSelect(value);
        };

        _this.state = {
            selected: props.selected || null
        };
        return _this;
    }

    _createClass(RadioButtonGroup, [{
        key: "render",
        value: function () {
            function render() {
                var _this2 = this;

                var _props = this.props,
                    items = _props.items,
                    theme = _props.theme,
                    primary = _props.primary;

                return _react2["default"].createElement(
                    _reactPrimitives.View,
                    null,
                    items && items.length && items.map(function (item) {
                        var value = item.value;

                        return _react2["default"].createElement(_RadioButton2["default"], _extends({
                            ref: value,
                            key: "RadioButton" + String(value),
                            value: "" + String(value.toString()),
                            theme: theme,
                            primary: primary,
                            onSelect: _this2.onSelect,
                            checked: _this2.state.selected && _this2.state.selected === value
                        }, item));
                    })
                );
            }

            return render;
        }()
    }, {
        key: "value",


        /**
         * Get the value of checked RadioButton in RadioButtonGroup. Often use in form.
         * @returns {string}
         */
        get: function () {
            function get() {
                return this.state.selected;
            }

            return get;
        }()

        /**
         * Specifies that which RadioButton should be pre-selected
         * @param {string} value
         */
        ,
        set: function () {
            function set(value) {
                this.onSelect(value);
            }

            return set;
        }()
    }]);

    return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
    theme: _react.PropTypes.oneOf(_config.THEME_NAME),
    primary: _react.PropTypes.oneOf(_config.PRIMARY_COLORS),
    onSelect: _react.PropTypes.func,
    selected: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
        label: _react.PropTypes.string,
        disabled: _react.PropTypes.bool
    }))
};
RadioButtonGroup.defaultProps = {
    theme: 'light',
    primary: _config.PRIMARY
};
exports["default"] = RadioButtonGroup;