"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99544],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Prometheus Custom Metrics Adapter",weight:5,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/custom-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/custom-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/custom-metrics/","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/custom-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/custom-metrics/"]},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/cluster-monitoring/custom-metrics",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics",title:"Prometheus Custom Metrics Adapter",description:"After you've enabled cluster level monitoring, You can view the metrics data from Rancher. You can also deploy the Prometheus custom metrics adapter then you can use the HPA with metrics stored in cluster monitoring.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics.md",sourceDirName:"explanations/integrations-in-rancher/cluster-monitoring",slug:"/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-monitoring/custom-metrics.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Prometheus Custom Metrics Adapter",weight:5,aliases:["/rancher/v2.0-v2.4/en/project-admin/tools/monitoring/custom-metrics","/rancher/v2.0-v2.4/en/monitoring-alerting/legacy/monitoring/cluster-monitoring/custom-metrics","/rancher/v2.0-v2.4/en/cluster-admin/tools/monitoring/custom-metrics/","/rancher/v2.0-v2.4/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/custom-metrics","/rancher/v2.x/en/monitoring-alerting/v2.0.x-v2.4.x/cluster-monitoring/custom-metrics/"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Metrics",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/cluster-metrics"},next:{title:"Prometheus Expressions",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cluster-monitoring/expression"}},m={},u=[{value:"Deploy Prometheus Custom Metrics Adapter",id:"deploy-prometheus-custom-metrics-adapter",level:2},{value:"Configuration of prometheus custom metrics adapter",id:"configuration-of-prometheus-custom-metrics-adapter",level:2},{value:"Discovery",id:"discovery",level:3},{value:"Association",id:"association",level:3},{value:"Naming",id:"naming",level:3},{value:"Querying",id:"querying",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"After you've enabled ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"cluster level monitoring"),", You can view the metrics data from Rancher. You can also deploy the Prometheus custom metrics adapter then you can use the HPA with metrics stored in cluster monitoring."),(0,s.kt)("h2",{id:"deploy-prometheus-custom-metrics-adapter"},"Deploy Prometheus Custom Metrics Adapter"),(0,s.kt)("p",null,"We are going to use the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter/releases/tag/v0.5.0"},"Prometheus custom metrics adapter"),", version v0.5.0. This is a great example for the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/custom-metrics-apiserver"},"custom metrics server"),". And you must be the ",(0,s.kt)("em",{parentName:"p"},"cluster owner")," to execute following steps."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Get the service account of the cluster monitoring is using. It should be configured in the workload ID: ",(0,s.kt)("inlineCode",{parentName:"p"},"statefulset:cattle-prometheus:prometheus-cluster-monitoring"),". And if you didn't customize anything, the service account name should be ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster-monitoring"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Grant permission to that service account. You will need two kinds of permission.\nOne role is ",(0,s.kt)("inlineCode",{parentName:"p"},"extension-apiserver-authentication-reader")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system"),", so you will need to create a ",(0,s.kt)("inlineCode",{parentName:"p"},"Rolebinding")," to in ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system"),". This permission is to get api aggregation configuration from config map in ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system"),"."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: custom-metrics-auth-reader\n  namespace: kube-system\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: extension-apiserver-authentication-reader\nsubjects:\n- kind: ServiceAccount\n  name: cluster-monitoring\n  namespace: cattle-prometheus\n")),(0,s.kt)("p",null,"The other one is cluster role ",(0,s.kt)("inlineCode",{parentName:"p"},"system:auth-delegator"),", so you will need to create a ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding"),". This permission is to have subject access review permission."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: custom-metrics:system:auth-delegator\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system:auth-delegator\nsubjects:\n- kind: ServiceAccount\n  name: cluster-monitoring\n  namespace: cattle-prometheus\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create configuration for custom metrics adapter. Following is an example configuration. There will be a configuration details in next session.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: adapter-config\n  namespace: cattle-prometheus\ndata:\n  config.yaml: |\n    rules:\n    - seriesQuery: \'{__name__=~"^container_.*",container_name!="POD",namespace!="",pod_name!=""}\'\n      seriesFilters: []\n      resources:\n        overrides:\n          namespace:\n            resource: namespace\n          pod_name:\n            resource: pod\n      name:\n        matches: ^container_(.*)_seconds_total$\n        as: ""\n      metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>,container_name!="POD"}[1m])) by (<<.GroupBy>>)\n    - seriesQuery: \'{__name__=~"^container_.*",container_name!="POD",namespace!="",pod_name!=""}\'\n      seriesFilters:\n      - isNot: ^container_.*_seconds_total$\n      resources:\n        overrides:\n          namespace:\n            resource: namespace\n          pod_name:\n            resource: pod\n      name:\n        matches: ^container_(.*)_total$\n        as: ""\n      metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>,container_name!="POD"}[1m])) by (<<.GroupBy>>)\n    - seriesQuery: \'{__name__=~"^container_.*",container_name!="POD",namespace!="",pod_name!=""}\'\n      seriesFilters:\n      - isNot: ^container_.*_total$\n      resources:\n        overrides:\n          namespace:\n            resource: namespace\n          pod_name:\n            resource: pod\n      name:\n        matches: ^container_(.*)$\n        as: ""\n      metricsQuery: sum(<<.Series>>{<<.LabelMatchers>>,container_name!="POD"}) by (<<.GroupBy>>)\n    - seriesQuery: \'{namespace!="",__name__!~"^container_.*"}\'\n      seriesFilters:\n      - isNot: .*_total$\n      resources:\n        template: <<.Resource>>\n      name:\n        matches: ""\n        as: ""\n      metricsQuery: sum(<<.Series>>{<<.LabelMatchers>>}) by (<<.GroupBy>>)\n    - seriesQuery: \'{namespace!="",__name__!~"^container_.*"}\'\n      seriesFilters:\n      - isNot: .*_seconds_total\n      resources:\n        template: <<.Resource>>\n      name:\n        matches: ^(.*)_total$\n        as: ""\n      metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)\n    - seriesQuery: \'{namespace!="",__name__!~"^container_.*"}\'\n      seriesFilters: []\n      resources:\n        template: <<.Resource>>\n      name:\n        matches: ^(.*)_seconds_total$\n        as: ""\n      metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)\n    resourceRules:\n      cpu:\n        containerQuery: sum(rate(container_cpu_usage_seconds_total{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)\n        nodeQuery: sum(rate(container_cpu_usage_seconds_total{<<.LabelMatchers>>, id=\'/\'}[1m])) by (<<.GroupBy>>)\n        resources:\n          overrides:\n            instance:\n              resource: node\n            namespace:\n              resource: namespace\n            pod_name:\n              resource: pod\n        containerLabel: container_name\n      memory:\n        containerQuery: sum(container_memory_working_set_bytes{<<.LabelMatchers>>}) by (<<.GroupBy>>)\n        nodeQuery: sum(container_memory_working_set_bytes{<<.LabelMatchers>>,id=\'/\'}) by (<<.GroupBy>>)\n        resources:\n          overrides:\n            instance:\n              resource: node\n            namespace:\n              resource: namespace\n            pod_name:\n              resource: pod\n        containerLabel: container_name\n      window: 1m\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create HTTPS TLS certs for your api server. You can use following command to create a self-signed cert.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out serving.crt -keyout serving.key -subj "/C=CN/CN=custom-metrics-apiserver.cattle-prometheus.svc.cluster.local"\n# And you will find serving.crt and serving.key in your path. And then you are going to create a secret in cattle-prometheus namespace.\nkubectl create secret generic -n cattle-prometheus cm-adapter-serving-certs --from-file=serving.key=./serving.key --from-file=serving.crt=./serving.crt\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Then you can create the prometheus custom metrics adapter. And you will need a service for this deployment too. Creating it via Import YAML or Rancher would do. Please create those resources in ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-prometheus")," namespaces.")),(0,s.kt)("p",null,"Here is the prometheus custom metrics adapter deployment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: custom-metrics-apiserver\n  name: custom-metrics-apiserver\n  namespace: cattle-prometheus\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: custom-metrics-apiserver\n  template:\n    metadata:\n      labels:\n        app: custom-metrics-apiserver\n      name: custom-metrics-apiserver\n    spec:\n      serviceAccountName: cluster-monitoring\n      containers:\n      - name: custom-metrics-apiserver\n        image: directxman12/k8s-prometheus-adapter-amd64:v0.5.0\n        args:\n        - --secure-port=6443\n        - --tls-cert-file=/var/run/serving-cert/serving.crt\n        - --tls-private-key-file=/var/run/serving-cert/serving.key\n        - --logtostderr=true\n        - --prometheus-url=http://prometheus-operated/\n        - --metrics-relist-interval=1m\n        - --v=10\n        - --config=/etc/adapter/config.yaml\n        ports:\n        - containerPort: 6443\n        volumeMounts:\n        - mountPath: /var/run/serving-cert\n          name: volume-serving-cert\n          readOnly: true\n        - mountPath: /etc/adapter/\n          name: config\n          readOnly: true\n        - mountPath: /tmp\n          name: tmp-vol\n      volumes:\n      - name: volume-serving-cert\n        secret:\n          secretName: cm-adapter-serving-certs\n      - name: config\n        configMap:\n          name: adapter-config\n      - name: tmp-vol\n        emptyDir: {}\n\n")),(0,s.kt)("p",null,"Here is the service of the deployment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: custom-metrics-apiserver\n  namespace: cattle-prometheus\nspec:\n  ports:\n  - port: 443\n    targetPort: 6443\n  selector:\n    app: custom-metrics-apiserver\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create API service for your custom metric server.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apiregistration.k8s.io/v1beta1\nkind: APIService\nmetadata:\n  name: v1beta1.custom.metrics.k8s.io\nspec:\n  service:\n    name: custom-metrics-apiserver\n    namespace: cattle-prometheus\n  group: custom.metrics.k8s.io\n  version: v1beta1\n  insecureSkipTLSVerify: true\n  groupPriorityMinimum: 100\n  versionPriority: 100\n\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Then you can verify your custom metrics server by ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1"),". If you see the return datas from the api, it means that the metrics server has been successfully set up.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"You create HPA with custom metrics now. Here is an example of HPA. You will need to create a nginx deployment in your namespace first."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: HorizontalPodAutoscaler\napiVersion: autoscaling/v2beta1\nmetadata:\n  name: nginx\nspec:\n  scaleTargetRef:\n    # point the HPA at the nginx deployment you just created\n    apiVersion: apps/v1\n    kind: Deployment\n    name: nginx\n  # autoscale between 1 and 10 replicas\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  # use a "Pods" metric, which takes the average of the\n  # given metric across all pods controlled by the autoscaling target\n  - type: Pods\n    pods:\n      metricName: memory_usage_bytes\n      targetAverageValue: 5000000\n')),(0,s.kt)("p",null,"And then, you should see your nginx is scaling up. HPA with custom metrics works."),(0,s.kt)("h2",{id:"configuration-of-prometheus-custom-metrics-adapter"},"Configuration of prometheus custom metrics adapter"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DirectXMan12/k8s-prometheus-adapter/blob/master/docs/config.md"},"https://github.com/DirectXMan12/k8s-prometheus-adapter/blob/master/docs/config.md"))),(0,s.kt)("p",null,'The adapter determines which metrics to expose, and how to expose them,\nthrough a set of "discovery" rules.  Each rule is executed independently\n(so make sure that your rules are mutually exclusive), and specifies each\nof the steps the adapter needs to take to expose a metric in the API.'),(0,s.kt)("p",null,"Each rule can be broken down into roughly four parts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Discovery"),", which specifies how the adapter should find all Prometheus\nmetrics for this rule.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Association"),", which specifies how the adapter should determine which\nKubernetes resources a particular metric is associated with.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Naming"),", which specifies how the adapter should expose the metric in\nthe custom metrics API.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("em",{parentName:"p"},"Querying"),", which specifies how a request for a particular metric on one\nor more Kubernetes objects should be turned into a query to Prometheus."))),(0,s.kt)("p",null,"A basic config with one rule might look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n# this rule matches cumulative cAdvisor metrics measured in seconds\n- seriesQuery: \'{__name__=~"^container_.*",container_name!="POD",namespace!="",pod_name!=""}\'\n  resources:\n    # skip specifying generic resource<->label mappings, and just\n    # attach only pod and namespace resources by mapping label names to group-resources\n    overrides:\n      namespace: {resource: "namespace"},\n      pod_name: {resource: "pod"},\n  # specify that the `container_` and `_seconds_total` suffixes should be removed.\n  # this also introduces an implicit filter on metric family names\n  name:\n    # we use the value of the capture group implicitly as the API name\n    # we could also explicitly write `as: "$1"`\n    matches: "^container_(.*)_seconds_total$"\n  # specify how to construct a query to fetch samples for a given series\n  # This is a Go template where the `.Series` and `.LabelMatchers` string values\n  # are available, and the delimiters are `<<` and `>>` to avoid conflicts with\n  # the prometheus query language\n  metricsQuery: "sum(rate(<<.Series>>{<<.LabelMatchers>>,container_name!="POD"}[2m])) by (<<.GroupBy>>)"\n')),(0,s.kt)("h3",{id:"discovery"},"Discovery"),(0,s.kt)("p",null,"Discovery governs the process of finding the metrics that you want to\nexpose in the custom metrics API.  There are two fields that factor into\ndiscovery: ",(0,s.kt)("inlineCode",{parentName:"p"},"seriesQuery")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"seriesFilters"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"seriesQuery")," specifies Prometheus series query (as passed to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"/api/v1/series")," endpoint in Prometheus) to use to find some set of\nPrometheus series.  The adapter will strip the label values from this\nseries, and then use the resulting metric-name-label-names combinations\nlater on."),(0,s.kt)("p",null,"In many cases, ",(0,s.kt)("inlineCode",{parentName:"p"},"seriesQuery")," will be sufficient to narrow down the list of\nPrometheus series.  However, sometimes (especially if two rules might\notherwise overlap), it's useful to do additional filtering on metric\nnames.  In this case, ",(0,s.kt)("inlineCode",{parentName:"p"},"seriesFilters")," can be used.  After the list of\nseries is returned from ",(0,s.kt)("inlineCode",{parentName:"p"},"seriesQuery"),", each series has its metric name\nfiltered through any specified filters."),(0,s.kt)("p",null,"Filters may be either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"is: <regex>"),", which matches any series whose name matches the specified\nregex.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"isNot: <regex>"),", which matches any series whose name does not match the\nspecified regex."))),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# match all cAdvisor metrics that aren\'t measured in seconds\nseriesQuery: \'{__name__=~"^container_.*_total",container_name!="POD",namespace!="",pod_name!=""}\'\nseriesFilters:\n  isNot: "^container_.*_seconds_total"\n')),(0,s.kt)("h3",{id:"association"},"Association"),(0,s.kt)("p",null,"Association governs the process of figuring out which Kubernetes resources\na particular metric could be attached to.  The ",(0,s.kt)("inlineCode",{parentName:"p"},"resources")," field controls\nthis process."),(0,s.kt)("p",null,"There are two ways to associate resources with a particular metric.  In\nboth cases, the value of the label becomes the name of the particular\nobject."),(0,s.kt)("p",null,"One way is to specify that any label name that matches some particular\npattern refers to some group-resource based on the label name.  This can\nbe done using the ",(0,s.kt)("inlineCode",{parentName:"p"},"template")," field.   The pattern is specified as a Go\ntemplate, with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Group")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Resource")," fields representing group and\nresource. You don't necessarily have to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Group")," field (in which\ncase the group is guessed by the system). For instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# any label `kube_<group>_<resource>` becomes <group>.<resource> in Kubernetes\nresources:\n  template: "kube_<<.Group>>_<<.Resource>>"\n')),(0,s.kt)("p",null,"The other way is to specify that some particular label represents some\nparticular Kubernetes resource.  This can be done using the ",(0,s.kt)("inlineCode",{parentName:"p"},"overrides"),"\nfield.  Each override maps a Prometheus label to a Kubernetes\ngroup-resource. For instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# the microservice label corresponds to the apps.deployment resource\nresource:\n  overrides:\n    microservice: {group: "apps", resource: "deployment"}\n')),(0,s.kt)("p",null,"These two can be combined, so you can specify both a template and some\nindividual overrides."),(0,s.kt)("p",null,"The resources mentioned can be any resource available in your kubernetes\ncluster, as long as you've got a corresponding label."),(0,s.kt)("h3",{id:"naming"},"Naming"),(0,s.kt)("p",null,"Naming governs the process of converting a Prometheus metric name into\na metric in the custom metrics API, and vice versa.  It's controlled by\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,s.kt)("p",null,"Naming is controlled by specifying a pattern to extract an API name from\na Prometheus name, and potentially a transformation on that extracted\nvalue."),(0,s.kt)("p",null,"The pattern is specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},"matches")," field, and is just a regular\nexpression.  If not specified, it defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},".*"),"."),(0,s.kt)("p",null,"The transformation is specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"as")," field.  You can use any\ncapture groups defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"matches")," field.  If the ",(0,s.kt)("inlineCode",{parentName:"p"},"matches")," field\ndoesn't contain capture groups, the ",(0,s.kt)("inlineCode",{parentName:"p"},"as")," field defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"$0"),".  If it\ncontains a single capture group, the ",(0,s.kt)("inlineCode",{parentName:"p"},"as")," field defautls to ",(0,s.kt)("inlineCode",{parentName:"p"},"$1"),".\nOtherwise, it's an error not to specify the as field."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# match turn any name <name>_total to <name>_per_second\n# e.g. http_requests_total becomes http_requests_per_second\nname:\n  matches: "^(.*)_total$"\n  as: "${1}_per_second"\n')),(0,s.kt)("h3",{id:"querying"},"Querying"),(0,s.kt)("p",null,"Querying governs the process of actually fetching values for a particular\nmetric.  It's controlled by the ",(0,s.kt)("inlineCode",{parentName:"p"},"metricsQuery")," field."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"metricsQuery")," field is a Go template that gets turned into\na Prometheus query, using input from a particular call to the custom\nmetrics API. A given call to the custom metrics API is distilled down to\na metric name, a group-resource, and one or more objects of that\ngroup-resource.  These get turned into the following fields in the\ntemplate:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Series"),": the metric name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LabelMatchers"),": a comma-separated list of label matchers matching the\ngiven objects.  Currently, this is the label for the particular\ngroup-resource, plus the label for namespace, if the group-resource is\nnamespaced."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GroupBy"),": a comma-separated list of labels to group by.  Currently,\nthis contains the group-resource label used in ",(0,s.kt)("inlineCode",{parentName:"li"},"LabelMatchers"),".")),(0,s.kt)("p",null,"For instance, suppose we had a series ",(0,s.kt)("inlineCode",{parentName:"p"},"http_requests_total")," (exposed as\n",(0,s.kt)("inlineCode",{parentName:"p"},"http_requests_per_second")," in the API) with labels ",(0,s.kt)("inlineCode",{parentName:"p"},"service"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"pod"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"ingress"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"verb"),". The first four correspond to\nKubernetes resources.  Then, if someone requested the metric\n",(0,s.kt)("inlineCode",{parentName:"p"},"pods/http_request_per_second")," for the pods ",(0,s.kt)("inlineCode",{parentName:"p"},"pod1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"pod2")," in the\n",(0,s.kt)("inlineCode",{parentName:"p"},"somens")," namespace, we'd have:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'Series: "http_requests_total"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'LabelMatchers: "pod=~\\"pod1|pod2",namespace="somens"')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GroupBy"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"pod"))),(0,s.kt)("p",null,'Additionally, there are two advanced fields that are "raw" forms of other\nfields:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"LabelValuesByName"),": a map mapping the labels and values from the\n",(0,s.kt)("inlineCode",{parentName:"li"},"LabelMatchers")," field.  The values are pre-joined by ",(0,s.kt)("inlineCode",{parentName:"li"},"|"),"\n(for used with the ",(0,s.kt)("inlineCode",{parentName:"li"},"=~")," matcher in Prometheus)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GroupBySlice"),": the slice form of ",(0,s.kt)("inlineCode",{parentName:"li"},"GroupBy"),".")),(0,s.kt)("p",null,"In general, you'll probably want to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Series"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"LabelMatchers"),", and\n",(0,s.kt)("inlineCode",{parentName:"p"},"GroupBy")," fields.  The other two are for advanced usage."),(0,s.kt)("p",null,"The query is expected to return one value for each object requested.  The\nadapter will use the labels on the returned series to associate a given\nseries back to its corresponding object."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# convert cumulative cAdvisor metrics into rates calculated over 2 minutes\nmetricsQuery: "sum(rate(<<.Series>>{<<.LabelMatchers>>,container_name!="POD"}[2m])) by (<<.GroupBy>>)"\n')))}d.isMDXComponent=!0}}]);