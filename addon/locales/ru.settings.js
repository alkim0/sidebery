export default {
  'settings.opt_true': { message: 'вкл' },
  'settings.opt_false': { message: 'выкл' },

  'settings.nav_settings': { message: 'Настройки' },
  'settings.nav_settings_general': { message: 'Основные' },
  'settings.nav_settings_menu': { message: 'Меню' },
  'settings.nav_settings_nav': { message: 'Панель навигации' },
  'settings.nav_settings_group': { message: 'Групповая страница' },
  'settings.nav_settings_containers': { message: 'Контейнеры' },
  'settings.nav_settings_panels': { message: 'Панели' },
  'settings.nav_settings_tabs': { message: 'Вкладки' },
  'settings.nav_settings_new_tab_position': { message: 'Позиция новых вкладок' },
  'settings.nav_settings_pinned_tabs': { message: 'Закрепленные вкладок' },
  'settings.nav_settings_tabs_tree': { message: 'Дерево вкладок' },
  'settings.nav_settings_bookmarks': { message: 'Закладки' },
  'settings.nav_settings_appearance': { message: 'Вид' },
  'settings.nav_settings_snapshots': { message: 'Снепшоты' },
  'settings.nav_settings_mouse': { message: 'Мышь' },
  'settings.nav_settings_keybindings': { message: 'Клавиши' },
  'settings.nav_settings_permissions': { message: 'Разрешения' },
  'settings.nav_settings_storage': { message: 'Данные' },
  'settings.nav_settings_help': { message: 'Помощь' },

  'settings.nav_menu': { message: 'Редактор меню' },
  'settings.nav_menu_tabs': { message: 'Вкладки' },
  'settings.nav_menu_tabs_panel': { message: 'Панель вкладок' },
  'settings.nav_menu_bookmarks': { message: 'Закладки' },
  'settings.nav_menu_bookmarks_panel': { message: 'Панель закладок' },

  'settings.nav_styles': { message: 'Редактор стилей' },
  'settings.nav_snapshots': { message: 'Снепшоты' },

  'settings.ctrl_copy': { message: 'СКОПИРОВАТЬ' },
  'settings.ctrl_close': { message: 'ЗАКРЫТЬ' },

  // --- General
  'settings.general_title': { message: 'Основные' },
  'settings.native_scrollbars': { message: 'Использовать системные скроллбары' },
  'settings.state_storage': { message: 'Тип хранилища состояния вкладок' },
  'settings.state_storage_global': { message: 'глобальный стор' },
  'settings.state_storage_session': { message: 'сессия браузера' },
  'settings.state_storage_desc': {
    message: `- глобальный стор - быстрое, но неточное в редких случаях.
- сессия браузера - более строгое, но медленное. (Предупреждение: будет удалено вместе с сессией браузера)
Если у вас есть проблемы с неправильно восстановленными вкладками, попробуйте перезагрузить боковую панель и изменить эту опцию.`,
  },

  // --- Context menu
  'settings.ctx_menu_title': { message: 'Контекстное меню' },
  'settings.autoHide_ctx_menu': { message: 'Скрывать контекстное меню' },
  'settings.autoHide_ctx_menu_250': { message: '0.25сек' },
  'settings.autoHide_ctx_menu_500': { message: '0.5сек' },
  'settings.autoHide_ctx_menu_1000': { message: '1сек' },
  'settings.autoHide_ctx_menu_none': { message: 'никогда' },
  'settings.ctx_menu_native': { message: 'Использовать системное контекстное меню' },
  'settings.ctx_menu_render_inact': { message: 'Отображать неактивные элементы' },
  'settings.ctx_menu_editor': { message: 'Редактировать меню' },

  // --- Navigation bar
  'settings.nav_title': { message: 'Панель навигации' },
  'settings.nav_bar_layout': { message: 'Расположение' },
  'settings.nav_bar_layout_horizontal': { message: 'горизонтальное' },
  'settings.nav_bar_layout_vertical': { message: 'вертикальное' },
  'settings.nav_bar_layout_hidden': { message: 'скрытое' },
  'settings.nav_bar_inline': { message: 'В одну строку' },
  'settings.hide_settings_btn': { message: 'Скрывать кнопку "Настройки"' },
  'settings.hide_add_btn': { message: 'Скрывать кнопку "Создать панель"' },
  'settings.nav_btn_count': { message: 'Показывать количество табов/закладок' },
  'settings.hide_empty_panels': { message: 'Скрывать пустые панели' },
  'settings.nav_mid_click': { message: 'Клик средней кнопкой мыши по кнопке панели' },
  'settings.nav_mid_click_rm_all': { message: 'закрыть табы' },
  'settings.nav_mid_click_none': { message: 'ничего' },
  'settings.nav_switch_panels_wheel': { message: 'Переключать панели с помощью колеса мыши' },

  // --- Group page
  'settings.group_title': { message: 'Групповая страница' },
  'settings.group_layout': { message: 'Отображение' },
  'settings.group_layout_grid': { message: 'сетка' },
  'settings.group_layout_list': { message: 'список' },

  // --- Containers
  'settings.containers_title': { message: 'Контейнеры' },
  'settings.contianer_remove_confirm_prefix': {
    message: 'Вы действительно хотите удалить контейнер "',
  },
  'settings.contianer_remove_confirm_postfix': { message: '"?' },
  'settings.containers_create_btn': { message: 'Создать контейнер' },

  // --- Panels
  'settings.panels_title': { message: 'Панели' },
  'settings.panel_remove_confirm_1': { message: 'Удалить панель ' },
  'settings.panel_remove_confirm_2': {
    message: ' ?\nВсе табы этой панели будут перемещены в другую панель.',
  },
  'settings.panels_create_btn': { message: 'Создать панель' },

  // --- Tabs
  'settings.tabs_title': { message: 'Вкладки' },
  'settings.warn_on_multi_tab_close': { message: 'Предупреждать при закрытии нескольких вкладок' },
  'settings.warn_on_multi_tab_close_any': { message: 'любых' },
  'settings.warn_on_multi_tab_close_collapsed': { message: 'свернутых' },
  'settings.warn_on_multi_tab_close_none': { message: 'нет' },
  'settings.activate_on_mouseup': { message: 'Активировать вкладку при отпускании кнопки мыши' },
  'settings.activate_last_tab_on_panel_switching': {
    message: 'Активировать последнюю активную вкладку при переключении панелей',
  },
  'settings.skip_empty_panels': { message: 'Пропускать пустые контейнеры при переключении' },
  'settings.show_tab_rm_btn': {
    message: 'Показывать кнопку закрытия вкладки при наведении курсора',
  },
  'settings.show_tab_ctx': { message: 'Показывать цветовую метку контейнера' },
  'settings.hide_inactive_panel_tabs': { message: 'Скрывать вкладки неактивных панелей' },
  'settings.activate_after_closing': { message: 'После закрытия текущей вкладки активировать' },
  'settings.activate_after_closing_next': { message: 'следующую' },
  'settings.activate_after_closing_prev': { message: 'предыдущую' },
  'settings.activate_after_closing_prev_act': { message: 'последнюю активную' },
  'settings.activate_after_closing_none': { message: 'выкл' },
  'settings.activate_after_closing_prev_rule': { message: 'Правило предыдущей вкладки' },
  'settings.activate_after_closing_next_rule': { message: 'Правило следующей вкладки' },
  'settings.activate_after_closing_rule_tree': { message: 'дерево' },
  'settings.activate_after_closing_rule_visible': { message: 'видимая' },
  'settings.activate_after_closing_rule_any': { message: 'любая' },
  'settings.activate_after_closing_global': { message: 'Глобально' },
  'settings.shift_selection_from_active': {
    message: 'Начинать выделение по shift+клику с активной вкладки',
  },
  'settings.ask_new_bookmark_place': { message: 'Спрашивать куда сохранить закладки' },
  'settings.tabs_rm_undo_note': { message: 'Показывать уведомление о закрытии нескольких вкладок' },
  'settings.native_highlight': {
    message: 'Выделять стандартные вкладки (в верхней панели) вместе с вкладками в боковой панели',
  },

  // --- New tab position
  'settings.new_tab_position': { message: 'Позиция новых вкладок' },
  'settings.move_new_tab_pin': { message: 'Открытые из закрепленных вкладок' },
  'settings.move_new_tab_pin_start': { message: 'начало панели' },
  'settings.move_new_tab_pin_end': { message: 'конец пенели' },
  'settings.move_new_tab_pin_none': { message: 'выкл' },
  'settings.move_new_tab_parent': { message: 'Открытые из другой вкладки' },
  'settings.move_new_tab_parent_before': { message: 'перед родительской' },
  'settings.move_new_tab_parent_sibling': { message: 'после родительской' },
  'settings.move_new_tab_parent_first_child': { message: 'первая дочерняя' },
  'settings.move_new_tab_parent_last_child': { message: 'последняя дочерняя' },
  'settings.move_new_tab_parent_start': { message: 'начало панели' },
  'settings.move_new_tab_parent_end': { message: 'конец пенели' },
  'settings.move_new_tab_parent_none': { message: 'выкл' },
  'settings.move_new_tab_parent_act_panel': {
    message: 'Только если панель родительской вкладки активна',
  },
  'settings.move_new_tab': { message: 'Для остальных случаев' },
  'settings.move_new_tab_start': { message: 'начало панели' },
  'settings.move_new_tab_end': { message: 'конец пенели' },
  'settings.move_new_tab_before': { message: 'перед активной вкладкой' },
  'settings.move_new_tab_after': { message: 'после активной вкладкой' },
  'settings.move_new_tab_first_child': { message: 'первая дочерняя вкладка активной' },
  'settings.move_new_tab_last_child': { message: 'последняя дочерняя вкладка активной' },
  'settings.move_new_tab_none': { message: 'выкл' },

  // --- Pinned tabs
  'settings.pinned_tabs_title': { message: 'Закрепленные вкладки' },
  'settings.pinned_tabs_position': { message: 'Расположение закрепленных вкладок' },
  'settings.pinned_tabs_position_top': { message: 'вверху' },
  'settings.pinned_tabs_position_left': { message: 'слева' },
  'settings.pinned_tabs_position_right': { message: 'справа' },
  'settings.pinned_tabs_position_bottom': { message: 'внизу' },
  'settings.pinned_tabs_position_panel': { message: 'панель' },
  'settings.pinned_tabs_list': { message: 'Показывать заголовки закрепленных табов' },

  // --- Tabs tree
  'settings.tabs_tree_title': { message: 'Древовидное отображение вкладок' },
  'settings.tabs_tree_layout': { message: 'Древовидное отображение вкладок' },
  'settings.group_on_open_layout': {
    message: 'Создать поддерево при открытии ссылки в новой вкладке',
  },
  'settings.tabs_tree_limit': { message: 'Максимальный уровень вложенности вкладок' },
  'settings.tabs_tree_limit_1': { message: '1' },
  'settings.tabs_tree_limit_2': { message: '2' },
  'settings.tabs_tree_limit_3': { message: '3' },
  'settings.tabs_tree_limit_4': { message: '4' },
  'settings.tabs_tree_limit_5': { message: '5' },
  'settings.tabs_tree_limit_none': { message: 'выкл' },
  'settings.hide_folded_tabs': { message: 'Скрывать свернутые вкладки' },
  'settings.auto_fold_tabs': { message: 'Автоматически сворачивать вкладки' },
  'settings.auto_fold_tabs_except': { message: 'Кроме последних активных ветвей' },
  'settings.auto_fold_tabs_except_1': { message: '1' },
  'settings.auto_fold_tabs_except_2': { message: '2' },
  'settings.auto_fold_tabs_except_3': { message: '3' },
  'settings.auto_fold_tabs_except_4': { message: '4' },
  'settings.auto_fold_tabs_except_5': { message: '5' },
  'settings.auto_fold_tabs_except_none': { message: 'выкл' },
  'settings.auto_exp_tabs': { message: 'Автоматически разворачивать вкладки' },
  'settings.rm_child_tabs': { message: 'Закрывать дочерние вкладки вместе с родительской' },
  'settings.rm_child_tabs_all': { message: 'все' },
  'settings.rm_child_tabs_folded': { message: 'свернутые' },
  'settings.rm_child_tabs_none': { message: 'выкл' },
  'settings.tabs_child_count': { message: 'Показывать количество потомков на свернутой вкладке' },
  'settings.tabs_lvl_dots': { message: 'Показывать отметки уровней вложенности' },
  'settings.discard_folded': { message: 'Выгружать свернутые вкладки' },
  'settings.discard_folded_delay': { message: 'Через' },
  'settings.discard_folded_delay_sec': {
    message: ['секунда', 'секунды', 'секунд'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.discard_folded_delay_min': {
    message: ['минута', 'минуты', 'минут'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.tabs_tree_bookmarks': {
    message: 'Сохранять древовидную структуру при создании закладок',
  },

  // --- Bookmarks
  'settings.bookmarks_title': { message: 'Закладки' },
  'settings.bookmarks_panel': { message: 'Панель закладок' },
  'settings.warn_on_multi_bookmark_delete': {
    message: 'Предупреждать об удалении нескольких закладкок',
  },
  'settings.warn_on_multi_bookmark_delete_any': { message: 'любых' },
  'settings.warn_on_multi_bookmark_delete_collapsed': { message: 'свернутых' },
  'settings.warn_on_multi_bookmark_delete_none': { message: 'нет' },
  'settings.open_bookmark_new_tab': { message: 'Открывать закладку в новом табе' },
  'settings.mid_click_bookmark': { message: 'При нажатии средней кнопки мыши' },
  'settings.mid_click_bookmark_open_new_tab': { message: 'открывать в новой вкладке' },
  'settings.mid_click_bookmark_edit': { message: 'редактировать' },
  'settings.mid_click_bookmark_delete': { message: 'удалять' },
  'settings.act_mid_click_tab': { message: 'Активировать вкладку' },
  'settings.auto_close_bookmarks': { message: 'Автоматически сворачивать папки' },
  'settings.auto_rm_other': { message: 'Удалять открытые закладки из папки "Другие закладки"' },
  'settings.show_bookmark_len': { message: 'Показывать размер папки' },
  'settings.highlight_open_bookmarks': { message: 'Выделять открытые закладки' },
  'settings.activate_open_bookmark_tab': {
    message: 'Переходить на открытую вкладку вместо открытия новой',
  },
  'settings.bookmarks_rm_undo_note': {
    message: 'Показывать уведомление об удалении нескольких закладок',
  },

  // --- Appearance
  'settings.appearance_title': { message: 'Вид' },
  'settings.font_size': { message: 'Размер шрифта' },
  'settings.font_size_xxs': { message: 'XXS' },
  'settings.font_size_xs': { message: 'XS' },
  'settings.font_size_s': { message: 'S' },
  'settings.font_size_m': { message: 'M' },
  'settings.font_size_l': { message: 'L' },
  'settings.font_size_xl': { message: 'XL' },
  'settings.font_size_xxl': { message: 'XXL' },
  'settings.switch_style': { message: 'Стиль' },
  'settings.style_dark': { message: 'темный' },
  'settings.style_light': { message: 'светлый' },
  'settings.theme': { message: 'Тема' },
  'settings.theme_default': { message: 'стандартная' },
  'settings.theme_tactile': { message: 'тактильная' },
  'settings.theme_none': { message: 'нет' },
  'settings.bg_noise': { message: 'Матовый задний фон' },
  'settings.animations': { message: 'Анимации' },
  'settings.edit_styles': { message: 'Редактировать стили' },
  'settings.edit_theme': { message: 'Редактировать тему' },
  'settings.appearance_notes_title': { message: 'Примечания:' },
  'settings.appearance_notes': {
    message:
      '- Чтобы применить цвет темы к кнопкам Sidebery в интерфейсе браузера, установите «svg.context-properties.content.enabled» в «true» на странице about:config.',
  },

  // --- Snapshots
  'settings.snapshots_title': { message: 'Снепшоты' },
  'settings.snap_notify': { message: 'Показать уведомление после создания снепшота' },
  'settings.snap_interval': { message: 'Интервал авто-снепшотов' },
  'settings.snap_interval_min': {
    message: ['минута', 'минуты', 'минут'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snap_interval_hr': {
    message: ['час', 'часа', 'часов'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snap_interval_day': {
    message: ['день', 'дня', 'дней'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snap_interval_none': { message: 'выкл' },
  'settings.snap_limit': { message: 'Лимиты' },
  'settings.snap_limit_snap': {
    message: ['снепшот', 'снепшота', 'снепшотов'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snap_limit_kb': {
    message: ['кбайта', 'кбайт'],
    plur: [/^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snap_limit_day': {
    message: ['день', 'дня', 'дней'],
    plur: [/^(1|(\d*?)[^1]1)$/, /^([234]|(\d*?)[^1][234])$/],
  },
  'settings.snapshots_view_label': { message: 'Просмотреть снепшоты' },
  'settings.make_snapshot': { message: 'Создать снепшот' },
  'settings.rm_all_snapshots': { message: 'Удалить все снепшоты' },
  'settings.apply_snapshot': { message: 'применить' },
  'settings.rm_snapshot': { message: 'удалить' },

  // --- Mouse
  'settings.mouse_title': { message: 'Мышь' },
  'settings.h_scroll_through_panels': {
    message: 'Переключать панели с помощью горизонтальной прокрутки',
  },
  'settings.scroll_through_tabs': { message: 'Переключать табы с помощью колеса прокрутки' },
  'settings.scroll_through_tabs_panel': { message: 'на панели' },
  'settings.scroll_through_tabs_global': { message: 'глобально' },
  'settings.scroll_through_tabs_none': { message: 'выкл' },
  'settings.scroll_through_visible_tabs': { message: 'Пропускать свернутые' },
  'settings.scroll_through_tabs_skip_discarded': { message: 'Пропускать выгруженые' },
  'settings.scroll_through_tabs_except_overflow': {
    message: 'За исключением случаев, когда панель переполнена',
  },
  'settings.tab_double_click': { message: 'Двойной клик по табу' },
  'settings.tab_long_left_click': { message: 'Длительное нажатие левой кнопки мыши по табу' },
  'settings.tab_long_right_click': { message: 'Длительное нажатие правой кнопки мыши по табу' },
  'settings.tab_action_reload': { message: 'перезагрузить' },
  'settings.tab_action_duplicate': { message: 'дублировать' },
  'settings.tab_action_pin': { message: 'закрепить' },
  'settings.tab_action_mute': { message: 'выключить звук' },
  'settings.tab_action_clear_cookies': { message: 'удалить cookies' },
  'settings.tab_action_exp': { message: 'развернуть' },
  'settings.tab_action_new_after': { message: 'новая вкладка' },
  'settings.tab_action_new_child': { message: 'новая дочерняя вкладка' },
  'settings.tab_action_close': { message: 'закрыть вкладку' },
  'settings.tab_action_none': { message: 'выкл' },
  'settings.tabs_panel_left_click_action': { message: 'Левый клик по панели с табами' },
  'settings.tabs_panel_double_click_action': { message: 'Двойной клик по панели с табами' },
  'settings.tabs_panel_right_click_action': { message: 'Правый клик по панели с табами' },
  'settings.tabs_panel_action_tab': { message: 'создать таб' },
  'settings.tabs_panel_action_prev': { message: 'пред. панель' },
  'settings.tabs_panel_action_next': { message: 'след. панель' },
  'settings.tabs_panel_action_expand': { message: 'развернуть/свернуть' },
  'settings.tabs_panel_action_parent': { message: 'перейти к родительскому табу' },
  'settings.tabs_panel_action_menu': { message: 'открыть меню' },
  'settings.tabs_panel_action_collapse': { message: 'свернуть неактивные ветки' },
  'settings.tabs_panel_action_none': { message: 'выкл' },

  // --- Keybindings
  'settings.kb_title': { message: 'Клавиши' },
  'settings.reset_kb': { message: 'Сбросить клав. настройки' },
  'settings.toggle_kb': { message: 'Включить / отключить сочетания клавиш' },

  // --- Permissions
  'settings.permissions_title': { message: 'Разрешения' },
  'settings.all_urls_label': { message: 'Данные веб-сайтов:' },
  'settings.all_urls_info': {
    message:
      'Необходимо для:\n- Удаления cookies\n- Прокси и url-правил контейнеров\n- Скриншотов на групповой странице и на панели выбора окна',
  },
  'settings.tab_hide_label': { message: 'Скрытие табов:' },
  'settings.tab_hide_info': {
    message: 'Необходимо для:\n- Скрывания табов неактивных панелей\n- Скрывания свернутых табов',
  },
  'settings.clipboard_write_label': { message: 'Запись в буфер обмена:' },
  'settings.clipboard_write_info': {
    message: 'Необходимо для:\n- Копирования ссылок вкладок/закладок',
  },
  'settings.web_request_blocking_label': { message: 'Блокировка веб-запросов' },
  'settings.web_request_blocking_info': {
    message: 'Необходимо для:\n- Настройки User-Agent контейнеров',
  },

  // --- Storage
  'settings.storage_title': { message: 'Данные' },
  'settings.storage_delete_prop': { message: 'удалить' },
  'settings.storage_open_prop': { message: 'открыть' },
  'settings.storage_delete_confirm': { message: 'Удалить поле ' },
  'settings.update_storage_info': { message: 'Обновить' },
  'settings.clear_storage_info': { message: 'Удалить все' },
  'settings.clear_storage_confirm': { message: 'Вы действительно хотите удалить все данные?' },

  // --- Help
  'settings.help_title': { message: 'Помощь' },
  'settings.debug_info': { message: 'Отладочная информация' },
  'settings.repo_issue': { message: 'Создать github issue' },
  'settings.repo_bug': { message: 'Сообщить об ошибке' },
  'settings.repo_feature': { message: 'Предложить новую функцию' },
  'settings.reset_settings': { message: 'Сбросить настройки' },
  'settings.reset_confirm': { message: 'Вы уверены, что хотите сбросить настройки?' },
  'settings.ref_rm': { message: 'Will be removed, open issue if you need this feature.' },
  'settings.help_exp_data': { message: 'Экспорт' },
  'settings.help_imp_data': { message: 'Импорт' },
  'settings.help_imp_perm': { message: 'Необходимы дополнительные разрешения' },
  'settings.export_title': { message: 'Выберете данные для экспорта' },
  'settings.import_title': { message: 'Выберете данные для импорта' },
  'settings.export_containers': { message: 'Контейнеры' },
  'settings.export_panels': { message: 'Панели' },
  'settings.export_settings': { message: 'Настройки' },
  'settings.export_ctx_menu': { message: 'Контекстное меню' },
  'settings.export_styles': { message: 'Стили' },
  'settings.export_snapshots': { message: 'Снепшоты' },
  'settings.export_select_all': { message: 'Выбрать все' },
  'settings.reload_addon': { message: 'Перезагрузить расширение' },
}
