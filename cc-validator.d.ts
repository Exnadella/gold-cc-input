/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cc-validator.js
 */

/**
 * `gold-cc-input` is a single-line text field with Material Design styling
 * for entering a credit card number. As the user types, the number will be
 * formatted by adding a space every 4 digits.
 *
 *     <gold-cc-input></gold-cc-input>
 *
 * It may include an optional label, which by default is "Card number".
 *
 *     <gold-cc-input label="CC"></gold-cc-input>
 *
 * ### Validation
 *
 * The input can detect whether a credit card number is valid, and the type
 * of credit card it is, using the Luhn checksum. See `http://jquerycreditcardvalidator.com/`
 * for more information.
 *
 * The input can be automatically validated as the user is typing by using
 * the `auto-validate` and `required` attributes. For manual validation, the
 * element also has a `validate()` method, which returns the validity of the
 * input as well sets any appropriate error messages and styles.
 *
 * A list of allowable credit card types can be provided via the `cardTypes`
 * property. Possible options, from `cc-validator.js`, are: `amex`, `diners_club`,
 * `discover`, `jcb`, `laser`, `maestro`, `mastercard`, `visa`, `visa_electron`.
 *
 * See `Polymer.PaperInputBehavior` for more API docs.
 *
 * ### Styling
 *
 * See `Polymer.PaperInputContainer` for a list of custom properties used to
 * style this element.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `----gold-cc-input-icon-container` | Mixin applied to the icon container | `{}`
 */
interface GoldCcInputElement extends Polymer.Element, Polymer.PaperInputBehavior, Polymer.IronValidatableBehavior, Polymer.IronFormElementBehavior {

  /**
   * The label for this input.
   */
  label: string|null|undefined;
  value: string|null|undefined;

  /**
   * Returns a reference to the focusable element. Overridden from PaperInputBehavior
   * to correctly focus the native input.
   *         
   */
  readonly _focusableElement: any;

  /**
   * The type of the credit card, if it is valid. Empty otherwise.
   */
  cardType: string|null|undefined;

  /**
   * A list of allowable card-types. If empty, all card-types are valid
   */
  cardTypes: any[]|null|undefined;
  ready(): void;

  /**
   * Returns true if the element has a valid value, and sets the visual
   * error state.
   *
   * @returns Whether the input is currently valid or not.
   */
  validate(): boolean;
  beforeRegister(): void;
  _beforeRegister(): void;
  _onIronInputReady(): void;

  /**
   * A handler that is called when cardTypes changes
   */
  _onCardTypesChanged(cardTypes: any, oldValue: any): void;

  /**
   * A handler that is called on input
   */
  _onValueChanged(value: any, oldValue: any): void;

  /**
   * Overidden from Polymer.IronControlState.
   */
  _onFocusedChanged(focused: any): void;
}

interface HTMLElementTagNameMap {
  "gold-cc-input": GoldCcInputElement;
}
