use serde::Serialize;
use tauri::{AppHandle, Manager, Wry};

fn emit_to_main<S>(app_handler: &AppHandle<Wry>, event: &str, payload: S)
where
  S: Serialize + Clone,
{
  let _ = app_handler.get_window("main").map(|win| {
    let _ = win.emit(event, payload);
  });
}

//<editor-fold desc="Actions">
pub fn action_quit_app(app_handler: &AppHandle<Wry>) {
  app_handler.exit(0)
}

pub fn action_open_settings(a: &AppHandle<Wry>) {
  action_show_app(a);
  emit_to_main(a, "open-settings", ());
}

pub fn action_open_about(a: &AppHandle<Wry>) {
  emit_to_main(a, "open-about", ());
}

pub fn action_open_help(a: &AppHandle<Wry>) {
  emit_to_main(a, "open-help", ());
}

pub fn action_show_app(a: &AppHandle<Wry>) {
  let _ = a.get_window("main").map(|win| {
    let _ = win.unminimize();
    let _ = win.show();
  });
}

//</editor-fold>
