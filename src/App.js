import "./App.css";
import Main from "./Main";
import EN from "./ar.json"

function App() {

  return (
    <div className="dark">
      <Main className="h-screen">
        <div className="px-6 py-8 bg-gray-900">
          <h1>{EN.HelloWorld}</h1>
        </div>
        <div class="group flex items-center">
          <img class="shrink-0 h-12 w-12 rounded-full" src="..." alt="" />
          <div class="ltr:ml-3 rtl:mr-3">
            <p class="text-sm font-medium text-slate-300 group-hover:text-white">
              تامر كرم
            </p>
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">
              الرئيس التنفيذي
            </p>
          </div>
        </div>
        <div class="group flex items-center">
          <img class="shrink-0 h-12 w-12 rounded-full" src="..." alt="" />
          <div class="ltr:ml-3 rtl:mr-3">
            <p class="text-sm font-medium text-slate-300 group-hover:text-white">
              Tom Cook{" "}
            </p>
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">
              Director of Operations
            </p>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;
