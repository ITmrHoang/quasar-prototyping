<template>
  <q-page class="">
    <div class="row flex-center q-mt-xs">
      <div class="col-xs-12 col-sm-8 col-md-8">
        <q-card bordered class="bg-grey-1 q-pa-md">
          <q-card-section horizontal class="justify-between">
            <div class="col-6 offset-1 text-h6">
              {{ $t("agents.newAgent") }}
            </div>
            <div class="col-2 q-mb-xs">
              <q-btn flat icon="refresh" :label="$t('refresh')"> </q-btn>
            </div>
          </q-card-section>

          <q-separator inset />
          <div class="q-px-xl">
            <q-timeline>
              <q-timeline-entry
                :title="$t('agents.chooseTheOperatingSystem')"
                icon="img:icons/1-circle.svg"
              >
                <button>ádfsdf</button>
              </q-timeline-entry>

              <q-timeline-entry
                :title="$t('agents.chooseTheVersion')"
                icon="img:icons/2-circle.svg"
              >
                2
              </q-timeline-entry>
              <q-timeline-entry
                :title="$t('agents.chooseTheArchitecture')"
                icon="img:icons/3-circle.svg"
                >3
              </q-timeline-entry>
              <q-timeline-entry
                :title="$t('agents.wazuhServerAddress')"
                icon="img:icons/4-circle.svg"
                >4
              </q-timeline-entry>
              <q-timeline-entry
                :title="$t('agents.optionalSettings')"
                icon="img:icons/5-circle.svg"
                >5
              </q-timeline-entry>
              <q-timeline-entry
                :title="$t('agents.installAndEnrollTheAgent')"
                icon="img:icons/6-circle.svg"
                >6
              </q-timeline-entry>
              <q-timeline-entry
                :title="$t('agents.startTheAgent')"
                icon="img:icons/7-circle.svg"
                >7
              </q-timeline-entry>
            </q-timeline>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { ref, computed, reactive } from "vue";
export default {
  name: "AgentIsntall",
  data() {
    const step = 1;
    const steps = {
      done1: false,
      done2: false,
      done3: false,
      done4: false,
      done5: false,
      done6: false,
      done7: false,
    };
    return {
      step,
      steps,
    };
  },
  setup() {},
};
</script>
