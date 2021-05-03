myApp.component("mycomp", {
  template: " {{$ctrl.name}}{{$ctrl.myName}}",
  bindings: { name: "@" },
  controller: function () {
    this.myName = "AngularJs Arithmetic Calculator";
  },
});
