import { LocalStorage, SessionStorage } from "quasar";

import AuthStorage from "src/services/AuthStorage";
import LanguageStorage from "src/services/LanguageStorage";

export default {
  local: LocalStorage,
  session: SessionStorage,
  auth: AuthStorage,
  lang: LanguageStorage,
};
