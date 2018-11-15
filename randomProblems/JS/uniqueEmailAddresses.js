/**
 * 
 * Every email consists of a local name and a domain name, separated by the @ sign.
 * For example, in alice@email.com, alice is the local name, and email.com is the domain name.
 * Besides lowercase letters, these emails may contain '.'s or '+'s.
 * If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@email.com" and "alicez@email.com" forward to the same email address.  (Note that this rule does not apply for domain names.)
 * If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)
 * It is possible to use both of these rules at the same time.
 * Given a list of emails, we send one email to each address in the list.
 * How many different addresses actually receive mails? 
 * 
 * Examples:
 * Input: ["test.email+alex@email.com","test.e.mail+bob.cathy@email.com","testemail+david@ema.l.com"]
 * Output: 2
 * 
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  var emailHash = {};
  var result = 0;

  for (let i = 0; i < emails.length; i++) {
    let email = emails[i].split('@');
    let localName = email[0];
    let domainName = email[1];
    let resume = true;
    let tempEmail = '';
    let tempLocalName = '';

    for (let j = 0; j < localName.length && resume; j++) {
      let char = localName.charAt(j);

      if (char === '+') {
        resume = false;
      };

      if (char !== '.' && char !== '+') {
        tempLocalName += char;
      }
    }

    tempEmail = tempLocalName + '@' + domainName;

    if (!emailHash[tempEmail]) {
      emailHash[tempEmail] = 1;
      result += 1;
    }

  }

  return result;
};